import { GetServerSideProps, NextPage } from "next";
import CharacterApi from "../../lib/api/characters";
import { PagePropsType } from "../../lib/types/page";
import Character from "../../lib/models/Character";


interface CharacterPageProps extends PagePropsType {
   character: Character;
}

const CharacterPage: NextPage<CharacterPageProps> = ({ character }) => {

   if (!character.id) {
      return <div>on a pas trouvé déso</div>
   } else {
      return (
         <div>
            <p>{character.name}</p>
            <p>level: {character.statistics.level}</p>
            <p>classe: {character.role}</p>
         </div>
      );
   }
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const id = params?.slug?.toString();
   let character = {} as Character;
   const fetchCharacter = new CharacterApi;

   const response = await fetchCharacter.getCharacterById(id);

   if (response.error) {
      console.log(`le personnage avec l'id ${id} n'a pas été trouvé`);
   } else character = response;

   return { props: { character } };
};

export default CharacterPage;
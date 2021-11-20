import { GetServerSideProps, NextPage } from "next";
import CharacterApi from "../../lib/api/characters";
import { PageProps } from "../../lib/interfaces/page";
import Character from "../../lib/models/Character";


interface CharactersPageProps extends PageProps {
   character: Character;
}

const CharactersPage: NextPage<CharactersPageProps> = ({ character }) => {

   if (!character.id) {
      return <div>on a pas trouvé déso</div>
   } else {
      return (
         <div>
            {character.name}
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

export default CharactersPage;
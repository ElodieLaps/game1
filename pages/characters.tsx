import { GetServerSideProps, NextPage } from "next";
import CharacterApi from "../lib/api/characters";
import { PagePropsType } from "../lib/types/page";
import Link from "next/link";


interface CharactersPageProps extends PagePropsType {
   characters: any;
}

const CharactersPage: NextPage<CharactersPageProps> = ({ characters }) => {
   return (
      <div>
         {characters.map((character: any) => {
            return <div key={characters.id}>
               <Link href={`/characters/${character.id}`}>{character.name}</Link>
               <p>level: {character.statistics.level}</p>
               <p>classe: {character.role}</p>
            </div>
         })}
      </div>
   );
};

export const getServerSideProps: GetServerSideProps = async () => {
   const fetchCharacter = new CharacterApi;
   const characters = await fetchCharacter.getAllCharacters();

   return { props: { characters } };
};

export default CharactersPage;

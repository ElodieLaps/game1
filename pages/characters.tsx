import { GetServerSideProps, NextPage } from "next";
import CharacterApi from "../lib/api/characters";
import { PageProps } from "../lib/interfaces/page";
import Link from "next/link";


interface CharactersPageProps extends PageProps {
   characters: any;
}

const CharactersPage: NextPage<CharactersPageProps> = ({ characters }) => {
   return (
      <div>
         {characters.map((character: any) => {
            return <div key={characters.id}>
               <Link href={`/characters/${character.id}`}>{character.name}</Link>
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
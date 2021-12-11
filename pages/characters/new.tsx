import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import CharacterApi from "../../lib/api/characters";
import { PageProps } from "../../lib/interfaces/page";
import Character from "../../lib/models/Character";
import { server } from "../../config";


interface NewCharacterPageProps extends PageProps {
   character: Character;
}

const NewCharacterPage: NextPage<NewCharacterPageProps> = ({ character }) => {

   const [newCharacter, setNewCharacter] = useState();

   return (
      <div>
         <h1>nouveau perso</h1>
         <form action={`${server}/api/characters/new`} method="POST" >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
         </form>
      </div >
   )
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

export default NewCharacterPage;
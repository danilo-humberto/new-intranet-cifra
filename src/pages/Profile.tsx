import { data } from "react-router-dom";

const Profile = () => {
  return (
    <section className="py-4 px-5">
      <h2 className="text-2xl font-semibold">⚙️ Editar Perfil</h2>
      <form className="flex flex-col md:flex-row gap-4 w-full mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <figure className="grid place-items-center">
              <img
                src="https://media.istockphoto.com/id/1495088043/pt/vetorial/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=S7d8ImMSfoLBMCaEJOffTVua003OAl2xUnzOsuKIwek="
                alt="foto teste"
                className="w-80 h-80 rounded-full"
              />
            </figure>
            <input
              name="imageProfile"
              id="imageProfile"
              type="text"
              placeholder="Insira a url da imagem"
              className="border border-input px-2 py-3 rounded-sm focus:border-gold-yellow outline-none w-full"
            />
          </div>
          <div>
            <label htmlFor="name">Nome</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Profile;

import Logo from "../../assets/rec-ajuda-icon.svg";
import QuestionIcon from "../../assets/contact/question-icon.svg";
import { Header } from "./Header";
import InfoCard from "./InfoCard";
export const Contact = () => {
    return (
        <div className="z-0 relative h-screen flex items-center justify-content flex-col text-black">
            <Header
                src={Logo}
                altImage="QuestionIcon"
                onClickBack={() => null}
                onClickMenu={() => null}
            />
            <div className="flex">
                <img src={QuestionIcon} />
                <div id="content">
                    <p className="font-poppies text-16px">Está com uma emergência?</p>
                    <p className="font-poppies text-16px">Veja para quem ligar!</p>
                </div>
            </div>
            <InfoCard title={"Serviços Básicos"} leftItems={["CELPE", "Compesa"]} rightItems={["116", "121"]} />
            <InfoCard title={"Defesa Civil"} leftItems={["Recife", "Região Metropolitana"]} rightItems={["116", "121"]} />
            <InfoCard title={"Emergências e Segurança"} leftItems={["SAMU", "Corpo de Bombeiros", "Polícia Militar", "Polícia Civil"]} rightItems={["192", "193", "190", "3184-3475"]} />
            <InfoCard title={"Órgãos Governamentais"} leftItems={["Secretaria de Assistência Social"]} rightItems={["121"]} />
            <footer></footer>
        </div>
    );
};
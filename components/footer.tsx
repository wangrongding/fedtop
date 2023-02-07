import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-center">
          <a
            href={"https://github.com/wangrongding"}
            className="mx-3 font-bold hover:underline"
          >
            赣ICP备19003256号-2
          </a>
          <a
            href={"https://github.com/wangrongding"}
            className="mx-3 font-bold hover:underline"
          >
            ©荣顶 2018 - {new Date().getFullYear()}
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import { CustomLink } from "../components/customLink";

const Homepage = () => {
  return (
    <div>
      <div className="container__wrapper">
        <CustomLink to="/auth" className="textOnHP">
          ИС для работы инженерного отдела санатория .
        </CustomLink>
      </div>
    </div>
  );
};

export { Homepage };

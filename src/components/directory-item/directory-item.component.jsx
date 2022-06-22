import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, newCollectionTittle, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{newCollectionTittle}</h1>
        <h2>{title}</h2>
        {/*<p>Shop Now</p>*/}
      </Body>
      <Button onClick={onNavigateHandler}>Shop now</Button>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

// import Gallery from "../carousel/carousel";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainerMain, DirectoryContainer } from "./directory.styles";

const main = [
  {
    id: 1,
    newCollectionTittle: "New Collection",
    title: "Sunglasses",
    imageUrl: "https://i.ibb.co/q0LYg8Q/glasses.png",
    route: "shop/sunglasses",
  },
];
// Variable that contains objects that reflects the 6 category-container divs:
const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/SdjRspS/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Hats",
    imageUrl: "https://i.ibb.co/y4mhJQ2/hat-men.png",
    route: "shop/hats",
  },
  {
    id: 3,
    title: "Bags",
    imageUrl: "https://i.ibb.co/4Ngh93x/bag-woman.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Bags",
    imageUrl: "https://i.ibb.co/QFk3y6y/bag-woman2.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/1M3RFc8/jacket-men.png",
    route: "shop/mens",
  },
  {
    id: 6,
    title: "Winter Jackets",
    imageUrl: "https://i.ibb.co/NrQmzMb/jacket-woman.png",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div>
      {/*<Gallery />*/}
      <DirectoryContainerMain>
        {main.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainerMain>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </div>
  );
};

export default Directory;

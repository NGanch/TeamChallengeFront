import MENU_CATEGORIES from "../../data/menucatalogue.json";
import { Icons } from "../IconComponents/Icons";

import CatalogueModal from "../ListofModals/CatalogueModal";
import { GoodsType } from "../ListofModals/CatalogueModal";

import {
  MenuCatalogueContainer,
  MenuList,
  MenuItem,
  TextDiv,
  MenuTitle,
  MenuButton,
} from "./MenuCatalogue.styled";

import { getCatalogue } from "../../redux/catalogue/catalogue-operation";
import { CatalogueState } from "../../redux/types/initialEntity";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const MenuCatalogueList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  const catalogue: CatalogueState[] = useAppSelector((state) => {
    return state.catalogue.catalogueList;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleToggleTitle = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(true); // Open the modal when a category is selected
  };

  // Код в компоненті MenuCatalogueList
  const goodsData =
    (selectedCategory &&
      (catalogue.find((category) => category.id === selectedCategory)
        ?.groupSpecifications as GoodsType)) ||
    [];
  return (
    <MenuCatalogueContainer>
      <MenuList>
        {MENU_CATEGORIES.map(({ id, title, right, icon }) => (
          <MenuItem key={id} onClick={() => handleToggleTitle(id)}>
            <Icons name={icon} />
            <TextDiv>
              <MenuTitle>{title}</MenuTitle>
              <MenuButton>
                <Icons name={right} />
              </MenuButton>
            </TextDiv>
          </MenuItem>
        ))}
      </MenuList>
      {isOpen ? (
        <CatalogueModal
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)} // Close the modal
          groupSpecifications={goodsData}
        />
      ) : null}
    </MenuCatalogueContainer>
  );
};

export default MenuCatalogueList;


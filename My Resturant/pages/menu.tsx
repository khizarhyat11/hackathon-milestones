import type { NextPage } from "next";
import ClientsAndPartner from "../components/clients-and-partner";
import ClientCustomers from "../components/client-customers";
import ShopList from "../components/shop-list";
import StarterMenu from "../components/starter-menu";
import StarterMenu1 from "../components/starter-menu1";
import Component6 from "../components/component6";

const Menu: NextPage = () => {
  return (
    <div className="w-full relative bg-fffffff h-[5282px] overflow-hidden">
      <ClientsAndPartner />
      <ClientCustomers />
      <ShopList />
      <StarterMenu
        rectangle8874="/rectangle-8874@2x.png"
        starterMenu="Starter Menu"
      />
      <StarterMenu1
        unsplashGFCYhoRe48="/unsplashgfcyhore48@2x.png"
        mainCourse="Main Course"
      />
      <StarterMenu1
        unsplashGFCYhoRe48="/unsplashakwagpf710@2x.png"
        mainCourse="Drinks"
        starterMenuTop="63.67%"
        starterMenuBottom="24.44%"
      />
      <StarterMenu
        rectangle8874="/unsplash90hdolgbjck@2x.png"
        starterMenu="Dessert"
        starterMenuTop="49.51%"
        starterMenuBottom="38.6%"
      />
      <Component6 />
    </div>
  );
};

export default Menu;

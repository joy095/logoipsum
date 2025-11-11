import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import Buttons from "./Buttons";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link href="/">
          <Image
            src="/logo.svg"
            loading="eager"
            alt="Logo of Logoipsum"
            height={45}
            width={180}
          />
        </Link>

        <div className="flex items-center gap-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Software Team</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/software-team">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/resources">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/company">Company</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Buttons variant="primary">View More</Buttons>
        </div>
      </div>
    </header>
  );
};

export default Header;

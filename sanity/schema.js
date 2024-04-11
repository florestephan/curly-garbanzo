import {Home} from "@/sanity/schema/home";
import {About} from "@/sanity/schema/about";
import {Contact} from "@/sanity/schema/Contact";
import {Storelocator} from "@/sanity/schema/storelocator";
import localizedSlug from "@/sanity/schema/localizedSlug";
import siteConfig from "@/sanity/schema/siteConfig";
import Nav from "@/sanity/schema/Nav";
import navItem from "@/sanity/schema/objects/navItem";
import link from "@/sanity/schema/objects/link";
import {mlleBarro} from "@/sanity/schema/mlleBarro";


export const schema = {
    types: [siteConfig, Nav, navItem, link, Home, About, mlleBarro, Contact, Storelocator, localizedSlug],
}
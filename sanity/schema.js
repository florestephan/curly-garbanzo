import {Home} from "@/sanity/schema/home";
import {About} from "@/sanity/schema/about";
import {Contact} from "@/sanity/schema/Contact";
import {Storelocator} from "@/sanity/schema/storelocator";
import {Revendeurs} from "@/sanity/schema/revendeurs";
import localizedSlug from "@/sanity/schema/localizedSlug";
import siteConfig from "@/sanity/schema/siteConfig";
import Nav from "@/sanity/schema/Nav";
import navItem from "@/sanity/schema/objects/navItem";
import link from "@/sanity/schema/objects/link";
import {mlleBarro} from "@/sanity/schema/mlleBarro";
import {legals} from "@/sanity/schema/legals";
import {produitsHero} from "@/sanity/schema/produitsHero";
import blockSliderHero from "@/sanity/schema/objects/blockSliderHero";
import product from "@/sanity/schema/product";
import collection from "@/sanity/schema/collection";
import jewelryType from "@/sanity/schema/jewelryType";
import stone from "@/sanity/schema/stone";


export const schema = {
    types: [siteConfig, Nav, navItem, link, Home, About, mlleBarro, Contact, Storelocator, localizedSlug, Revendeurs, legals, blockSliderHero, produitsHero, product, collection, jewelryType, stone],
}
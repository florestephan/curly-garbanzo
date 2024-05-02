const HeroBanner = ({title}) => {

    return (
        <section className="pt-48 pb-28 h-[60svh] mobile:text-center mobile:pb-14">
            <h1 className="h-full items-end uppercase text-90 w-full flex justify-center leading-none text-Black mobile:leading-[60px]">{title}</h1>
        </section>
    )
}

export default HeroBanner
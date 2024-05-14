const Header = (props: React.PropsWithChildren) => {
    return <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center	">
            <h1><a href="/" className="no-underline	">Knock Example</a></h1>
            <a href={'/feed'}>OOTB components</a>
            <a href={'/custom-feed'}>Custom Feed using API</a>
            {props?.children}
        </div>
    </header>;
};

export default Header;
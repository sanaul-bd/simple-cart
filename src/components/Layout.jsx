

const Layout = ({ children }) => {
    return (
        <div className="w-full">
            <p className="bg-slate-400 w-full py-3 mb-6 font-semibold rounded-sm">Simple Shopping App</p>
            <div>
                {children}
            </div>
            {/* <p className="">Dev. by Ibos pvt. ltd.</p> */}
        </div>
    );
};

export default Layout;
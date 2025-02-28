import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const error =useRouteError();
    return (
        <div>
            <h1>Oops something went wrong!</h1>
            <p>Page not found</p>
            <p>{error.status}: {error.statusText}</p>
        </div>
    );
}

export default PageNotFound;
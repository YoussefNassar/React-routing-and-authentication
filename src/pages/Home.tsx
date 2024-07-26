import {useLoaderData} from "react-router-dom";

function Home() {

    const data: {
        name: string;
    } = useLoaderData();
    console.log(data)

    return (
        <div>
            <h1>Home: {data.name}</h1>
        </div>
    );
}

export default Home;

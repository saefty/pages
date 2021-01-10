import { HomePageComponent } from "../components/HomePage/HomePage";

import { HomePage } from '../components/HomePage/HomePage'
import { PageConfig } from '../config'
export default function Home() {
    return (
		<HomePage {...PageConfig.homePage}/>
    );
}

import * as React from "react";
import { Link } from "gatsby";
import Climate from "../pages/action-areas/climate";
import Equity from "../pages/action-areas/equity";
import Governance from "../pages/action-areas/governance";
import Growth from "../pages/action-areas/growth";
import Housing from "../pages/action-areas/housing";

const Carousel = () => {
    return (
        <div>
            <h1>Carousel links to AA landing pages</h1>
            <Link to="/action-areas/growth/">Inclusive Growth & Mobility</Link>
            <Link to="/action-areas/housing/">Homes for Everyone</Link>
            <Link to="/action-areas/equity/">Equity of Wealth & Health</Link>
            <Link to="/action-areas/governance/">Dynamic & Representative Government</Link>
            <Link to="/action-areas/climate/">Climate Mitigation & Resiliency</Link>
        </div>
    )
}

export default Carousel;
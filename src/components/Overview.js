import * as React from "react";
import Carousel from "./Carousel";
// import "../stylesheets/_overview.scss";

const Overview = () => {
    return (
        <div class="ReportsPage">
            <div class="reports">
                <section class="reports-hero">
                    <div class="reports-hero-container">
                        <div class="reports-hero-content">
                            <div class="reports-hero-content__header margins">
                                <h1>MetroCommon 2050</h1>
                                <h3>
                                    Greater Boston’s next regional plan <br/>
                                    Led by the Metropolitan Area Planning Council <br/>
                                    (MAPC)
                                </h3>
                            </div>
                            <div class="reports-hero-content__body">
                                <h4>Shaping our region together</h4>
                                <p>
                                    As the regional planning agency for the 101 cities and towns of Greater 
                                    Boston, we have one statutory requirement: To create a long-range regional 
                                    plan, from time to time. Our previous plan, MetroFuture has guided the 
                                    work of MAPC and many of its recommendations have been implemented. 
                                    Three years ago when we started the next plan, MetroCommon 2050: 
                                    Shaping our Region Together, we still however faced many of the same big 
                                    challenges, such as a lack of affordable housing, the increasing negative 
                                    impacts of climate change, an unreliable transportation system, and 
                                    increasing income, wealth, and health disparities by race. In last 10 years, 
                                    the negative impacts of climate change and neighborhoods and 
                                    municipalities increasingly unaffordable to most residents have become 
                                    even more of a crisis.
                                </p>
                                <div class="reports-hero-content__button">
                                    <a href="" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-banner__arrow container margins">
                        <img src="../images/mapc-logo.svg" className="logo" alt="logo_alt" />
                    </div>
                </section>
                <section class="reports-index">
                    {/* <%= render "/refinery/shared/navigation_site" %> */}
                </section>
                <section class="reports-content">
                    <div class="reports-content-container container margins">
                        <div class="reports-content-intro">
                            <h2>Introduction</h2>
                            <p>
                                MetroCommon 2050 is Greater Boston’s next long-range plan. MetroCommon is an action plan for local and state governments, residents and businesses. It recommends specific strategies for making the region a better place. Cupcake jelly chocolate bar jujubes gummi bears sugar plum gummies topping. Dessert icing muffin chocolate tart cotton candy. Tart fruitcake liquorice sweet. Ice cream candy halvah cake carrot cake chupa chups cake. Sweet roll croissant tart jujubes. Cotton candy jelly beans pudding candy canes. Apple pie biscuit jelly beans cookie tootsie roll ice cream. Bonbon cotton candy chocolate cake tiramisu. Pastry liquorice wafer biscuit. Jelly-o cupcake gummi bears wafer sugar plum bear claw. Soufflé candy pudding dessert chocolate marzipan muffin lemon drops cake. Gummies cheesecake pastry.
                            </p>
                            <p>
                                Cupcake pastry chocolate bar pastry danish macaroon powder fruitcake jujubes. Gingerbread carrot cake croissant. Pastry tiramisu tart icing macaroon caramels gingerbread sweet roll bonbon. Pastry jelly beans pie biscuit wafer cookie lemon drops biscuit marzipan. Apple pie donut jujubes cake tiramisu. Wafer gummies lollipop candy canes sugar plum fruitcake. Brownie cake pie chocolate bar biscuit sweet roll caramels. Marshmallow halvah pudding macaroon macaroon topping gummi bears liquorice jelly-o. Dessert sugar plum marzipan tootsie roll gummies. Macaroon bear claw soufflé toffee marzipan topping gummies muffin carrot cake. Cotton candy jelly chupa chups danish tiramisu tart gummies cotton candy. Jelly wafer macaroon jelly-o chocolate toffee tootsie roll icing.
                            </p>
                            <p>
                                Chocolate marshmallow pie powder dragée sweet roll soufflé candy canes sweet roll. Dragée fruitcake macaroon icing fruitcake tart marshmallow macaroon. Candy liquorice bear claw sugar plum cookie. Cake tootsie roll bear claw jelly beans. Chupa chups gummies chocolate tart dessert. Halvah jelly gummi bears jelly liquorice. Fruitcake topping candy canes sugar plum cheesecake cupcake dessert chupa chups tiramisu. Halvah chocolate lemon drops chocolate cupcake sweet cheesecake. Cake biscuit wafer. Cake caramels bear claw. Apple pie candy cake liquorice lollipop tiramisu cheesecake. Candy bear claw chocolate cake sesame snaps. Pudding macaroon oat cake cookie danish. Cake tiramisu liquorice toffee tart.
                            </p>
                        </div>  
                        <div class="reports-content-goals">
                            <h2>What does making the region a better place actually mean?</h2>
                            <h3>What purpose do the MetroCommon 2050 goals serve?</h3>
                            <p>
                                The goals are intended to demonstrate what residents want life in the region to be like in the year 2050. The goals are intended to be bold yet achievable, not clinical or abstract. The goals avoid assuming current or anticipated systems will exist in 2050. They are also solutions agnostic. They don’t identify who will provide health care or how, just that everyone has it and it’s affordable. They reflect the values of the plan, which are equity, stewardship, resiliency, and prosperity. The goals are an idealized future and the plan’s recommendations provide a roadmap of how we can achieve the goals.
                            </p>
                            <div class="reports-content-goals-grid">
                                <a class="reports-content-goals-card reports-content-goals-card-green" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/getting-around-the-region">
                                    {/* <%= image_tag("goal-1.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Getting Around the Region</h5>
                                    <p>Traveling around Metro Boston is safe, affordable, convenient, and enjoyable.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-blue" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/homes-for-all">
                                    {/* <%= image_tag("goal-2.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Homes for All</h5>
                                    <p>All residents of Metro Boston have places to live that meet their needs, and that they can afford.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-blue" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/healthy-and-safe-neighborhoods">
                                    {/* <%= image_tag("goal-9.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Healthy and Safe Neighborhoods</h5>
                                    <p>We are safe, healthy, and connected to one another.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-purple" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/economic-security-and-prosperity">
                                    {/* <%= image_tag("goal-7.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Economic Security</h5>
                                    <p>Everyone has the financial resources to meet their needs and to live fulfilling lives.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-purple" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/economic-prosperity">
                                    {/* <%= image_tag("goal-8.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Economic Prosperity</h5>
                                    <p>Greater Boston’s economy benefits all in the region.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-purple" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/thriving-arts-culture-and-heritage">
                                    {/* <%= image_tag("goal-10.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Thriving Arts, Culture, and Heritage</h5>
                                    <p>Greater Boston is full of unique places and experiences that bring joy and foster diversity and social cohesion.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-red" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/dynamic-and-representative-governments">
                                    {/* <%= image_tag("goal-5.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>Dynamic and Representative Governments</h5>
                                    <p>Local governments and regional agencies have the capacity and resources to deliver the services and supports our residents deserve, and to maintain and invest in our built and natural environments.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-yellow" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/a-climate-resilient-region">
                                    {/* <%= image_tag("goal-3.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>A Climate-Resilient Region</h5>
                                    <p>Metro Boston is prepared for - and resilient to - the impacts of climate change.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-yellow" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/a-net-zero-carbon-region">
                                    {/* <%= image_tag("goal-4.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>A Net Zero Carbon Region</h5>
                                    <p>The Metro Boston region is highly energy efficient and has reduced its greenhouse gas (GHG) emissions to net zero.</p>
                                </a>
                                <a class="reports-content-goals-card reports-content-goals-card-yellow" href="https://mapc.gitbook.io/metrocommon-2050-goals/goals/a-healthy-environment">
                                    {/* <%= image_tag("goal-6.png", class: "", alt: t("Bikes and people walking")) %> */}
                                    <h5>A Healthy Environment</h5>
                                    <p>Greater Boston’s air, water, land, and other natural resources are clean and protected - for us and for the rest of the ecosystem.</p>
                                </a>
                            </div>
                            <h3>How did we decide that these would be the MetroCommon 2050 goals?</h3>
                            <p>
                                The first draft of the MetroCommon 2050 goals emerged from a thorough reassessment and restructuring of the goals in MetroFuture. MetroFuture is the 2008 regional plan that MAPC created with an immense amount of help and input from residents and experts alike. While we brought the MetroFuture goals up to date, we toured the region, asking residents, planners, and municipal and state leaders what they wanted life in the region to be like in the year 2050. We cataloged those visions, identified themes, and incorporated them into the draft of the updated goals. MAPC staff reviewed that first draft, adding context and refining terms and concepts. Next, the MetroCommon 2050 External Advisory Committee, a committee of stakeholders MAPC selected to guide our decision making throughout the regional plan update, provided feedback. We produced a second draft of the goals and turned them into a survey that allowed respondents to rate the goals, provide feedback on them, and propose new ones. We sent the survey out over social media, we included in our newsletter, we asked our partners to fill out, and we asked our partners to forward it to their partners. We received over 600 responses, which we also grouped into themes and incorporated into a third draft. The third draft was again presented to the External Advisory Committee who recommended that they be sent to MAPC’s Executive Committee for approval. On June 17th 2019 the Executive Committee provisionally approved the goals. We continued to gather feedback on the goals through May 2021 before finalizing them over the summer of 2021.  
                            </p>
                        </div> 
                        <div class="reports-content-action-areas">
                            <h2>Five interrelated topics: “Action Areas”</h2>
                            <div class="reports-content-action-areas-carousel">
                                <Carousel />
                            </div>
                            <h3>What was the process for determining the content within the Action Areas?</h3>
                            <p>
                                The Action Areas were informed by MAPC’s understanding of key issues facing the region, combined with years of public engagement that asked questions like: what future do you want to see for Greater Boston and what is preventing us from getting there? What are the key challenges and opportunities our region is facing? Where should we, collectively, focus our efforts to generate meaningful change? The narratives were honed with the help of MAPC staff, the MetroCommon 2050 Community Engagement Advisory Committee, the MetroCommon 2050 External Advisory Committee, and hundreds of participants from action area workshops spanning the summer and fall of 2020.
                            </p>

                            <div class="reports-content-action-areas-nesting-viz">
                                <h4>
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    Action Areas (5)
                                </h4>
                                <h4>
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    Recommendations (20)
                                </h4>
                                <h4>
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    Strategies (68)
                                </h4>
                                <h4>
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    {/* <%= image_tag("li-marker-20px.png", class: "", alt: t("Right facing triangle")) %> */}
                                    Policy Actions (227)
                                </h4>
                            </div>
                            <div class="reports-content-action-areas-accordion">
                                {/* <%= render "/refinery/shared/action_areas_accordion" %> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Overview
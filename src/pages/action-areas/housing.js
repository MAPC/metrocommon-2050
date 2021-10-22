import * as React from "react";
import { Link } from "gatsby";

const Housing = () => {
    return (
        <div class="ActionAreas_Housing action-areas">
            <section class="v2-banner">
            </section>
            <div class="action-areas-banner">
            </div>
            <div class="action-areas-content">
                <h1 class="action-areas-content__title">Homes for Everyone</h1>
                <div class="action-areas-content__arrow container">
                </div>
                <ul class="action-areas-content__list">
                    <li class="action-areas-content__list_item">The Vision</li>
                    <li class="action-areas-content__list_item">Policy Recommendations</li>
                    <li class="action-areas-content__list_item">How We Got Here</li>
                    <li class="action-areas-content__list_item">Challenges</li>
                </ul>
            </div>
            <div>
                <div class="action-areas-vision">
                    <div class="leader-line"></div>
                    <h2 class="action-areas-vision__title">The Vision</h2>
                    <ul class="action-areas-vision__list">
                        {/* <%= render "/refinery/shared/copy/action-areas/housing/vision" %>  */}
                    </ul>
                </div>
                <div class="action-areas-menu">
                    <div class="action-areas-menu__callout-image"></div>
                    <div class="action-areas-menu__goals"></div>
                    <div class="action-areas-menu__tools"></div>
                    <div class="action-areas-menu__strategies"></div>
                </div>
            <div class="action-areas-grid">
                <div class="action-areas-grid-col-1">
                    <div class="action-areas-recommendations">
                    <h2 class="action-areas-recommendations__title">Policy Recommendations</h2>
                    <div class="action-areas-recommendations__copy">
                        {/* <%= render "/refinery/shared/copy/action-areas/housing/recommendations" %>  */}
                    </div>
                    <div class="action-areas-recommendations__grid">
                        {/* <%= render "/refinery/shared/copy/action-areas/housing/recommendations_grid" %>  */}
                    </div>
                    </div>
                    <div class="action-areas-history">
                    <h2 class="action-areas-history__title">How We Got Here</h2>
                    <div class="action-areas-history__copy">
                        {/* <%= render "/refinery/shared/copy/action-areas/housing/history" %>  */}
                    </div>
                    </div>
                    <div class="action-areas-challenges">
                    <h2 class="action-areas-challenges__title">Challenges</h2>
                    <div class="action-areas-challenges__copy">
                        {/* <%= render "/refinery/shared/copy/action-areas/housing/challenges" %>  */}
                    </div>
                    </div>
                </div>
                <div class="action-areas-grid-col-2">
                    <div class="action-areas-sidebar">
                    {/* <%= render "/refinery/shared/copy/action-areas/housing/sidebar" %>  */}
                    </div>
                </div>
            </div>
        </div>
        <div class="action-areas-carousel container">
            {/* <%= render "/refinery/shared/action_areas_carousel" %> */}
        </div> 
        </div>
    )
}

export default Housing;
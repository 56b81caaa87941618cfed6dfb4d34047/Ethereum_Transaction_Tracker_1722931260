/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722931263", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-gray-900 to-indigo-900 flex-1 py-16">
        <div id="cta-inner-container" class="max-w-screen-xl px-6 mx-auto">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-opacity-20 bg-white rounded-lg backdrop-filter backdrop-blur-lg shadow-lg p-8 hover:bg-opacity-30 transition duration-300">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-4xl font-extrabold leading-tight tracking-tight text-purple-300">Discover Ethereum Transactions in Real-Time</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 text-lg font-light text-blue-200">Stay ahead of the curve with instant notifications on new Ethereum blockchain activity</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 shadow-md hover:shadow-xl">
                        <i class='bx bx-radar mr-2'></i>Track Transactions Now
                    </a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

<script lang="ts">
    import { ICONS } from "$lib/constants";

    interface Props {
        pos: number;
        heading: string;
        subheading: string;
        description: string;
        steps: { icon: keyof typeof ICONS; keyword: string; title: string }[];
    }
    let { pos, heading, subheading, description, steps }: Props = $props();
    let activeTab = $state(0);

    function isEven(num: number) {
        return num % 2 === 0;
    }
</script>

<div class="container tab-container" style={`--active-tab: ${activeTab};`}>
    <div
        class="grid grid-cols-1 gap-x-16 gap-y-16 items-center sm:gap-y-20 lg:grid-cols-2"
    >
        <div class={isEven(pos) ? "order-1 lg:order-2" : ""}>
            <p class="text-lg font-semibold leading-7 text-accent">
                {subheading}
            </p>
            <h2 class="mt-2 text-3xl font-semibold sm:text-4xl">
                {heading}
            </h2>
            <p class="mt-6 text-xl sm:text-2xl text-muted">
                {description}
            </p>
            <div class="mt-8 text-lg relative max-w-xl lg:max-w-none group">
                <div
                    class="absolute md:bg-secondary md:group-hover:bg-[rgb(38,38,38)] -left-[3%] rounded-lg w-[106%] transition-all duration-100"
                    style={`transform: translateY(calc(100% * var(--active-tab))); height: calc(100% / ${steps.length});`}
                ></div>
                <dl class="grid grid-cols-1 auto-rows-fr text-muted">
                    {#each steps as { icon, keyword, title }, i}
                        <div
                            class="active relative pl-9 pr-3 rounded-lg py-3"
                            onmouseenter={() => (activeTab = i)}
                            role="listitem"
                        >
                            <dt class="inline font-semibold text-white">
                                <span
                                    class="icon-xl absolute left-0 top-4 text-accent-400"
                                >
                                    {@html ICONS[icon]}
                                </span>
                                {keyword}
                            </dt>
                            <dd class="inline">
                                {title}
                            </dd>
                        </div>
                    {/each}
                </dl>
            </div>
        </div>
        <div
            class={`${isEven(pos) ? "order-2 lg:order-1" : ""} tab-content h-[540px] max-w-xl`}
        ></div>
    </div>
</div>

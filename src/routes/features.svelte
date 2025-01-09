<script lang="ts">
    import { GITHUB_REPO, ICONS } from "$lib/constants";
    import Link from "./link.svelte";

    const data = [
        {
            icon: "layout" as const,
            heading: "Dual interface",
            description:
                "Command palette for quick actions or visual calendar UI. Your choice, your workflow.",
        },
        {
            icon: "calendar" as const,
            heading: "Multiple periodicities",
            description:
                "From daily tasks to yearly goals. All your planning cycles in one place.",
        },
        {
            icon: "messageSquare" as const,
            heading: "Natural language support",
            description:
                'Create notes using intuitive expressions like "next friday" or "in two weeks".',
        },
        {
            icon: "calendarClock" as const,
            heading: "Timeline quickview",
            description:
                "Stay oriented with a mini-calendar at the top of your notes.",
        },
        {
            icon: "eye" as const,
            heading: "Smart preview",
            description:
                "See your notes directly in the calendar view. Quick access to your thoughts.",
        },
        {
            icon: "smile" as const,
            heading: "Emoji summaries",
            description:
                "Visualize your days with customizable emoji indicators. Add emotion to your calendar.",
        },
        {
            icon: "fileInput" as const,
            heading: "Dynamic templates",
            description:
                "Structure your notes with powerful templating, natural language dates, and dynamic content.",
        },
        {
            icon: "files" as const,
            heading: "Bulk operations",
            description:
                "Effortlessly manage multiple notes at once. Switch, move or delete formats with just a few clicks.",
        },
        {
            icon: "palette" as const,
            heading: "Customization",
            description:
                "Make it yours with extensive CSS customization. Create your perfect calendar interface.",
        },
    ];

    function onMouseMove(e: MouseEvent) {
        for (const card of document.getElementsByClassName(
            "card",
        ) as HTMLCollectionOf<HTMLElement>) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    }
</script>

<div class="py-16 sm:py-24">
    <div class="container">
        <div class="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            <div>
                <p class="text-lg font-semibold leading-7 text-accent">
                    Features
                </p>
                <h2 class="text-3xl font-semibold sm:text-4xl">
                    Time, transformed.
                </h2>
                <p class="mt-6 text-xl sm:text-2xl text-muted">
                    Transform your note-taking with a powerful calendar system.
                    <Link href={GITHUB_REPO} target="_blank">Open source</Link> and
                    designed for deep work - from daily tasks to yearly goals.
                </p>
            </div>
            <dl
                class="col-span-2 grid grid-cols-1 gap-x-3 gap-y-12 sm:gap-y-3 sm:grid-cols-2 md:grid-cols-3"
                id="cards"
                onmousemove={onMouseMove}
            >
                {#each data as card}
                    <div
                        class="card relative rounded-xl sm:bg-[rgba(255,_255,_255,_0.15)] p-[0.05rem]"
                    >
                        <div
                            class="card-content h-full rounded-[inherit] sm:bg-secondary sm:p-6 text-xl relative z-20 [transform:translateZ(0)]"
                        >
                            <dt class="font-semibold">
                                <div class="mb-2 icon-2xl text-accent h-8 w-8">
                                    {@html ICONS[card.icon]}
                                </div>
                                {card.heading}
                            </dt>
                            <dd class="mt-2 text-lg leading-tight text-muted">
                                {card.description}
                            </dd>
                        </div>
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>

<style lang="postcss">
    #cards:hover > .card::before {
        opacity: 1;
    }
    .card:hover::after {
        opacity: 0.15;
    }
    .card::before,
    .card::after {
        transform: translateZ(0); /* Trigger hardware acceleration */
        @apply rounded-[inherit] content-[""] h-full w-full absolute inset-0 opacity-0;
        transition: opacity 500ms;
    }
    .card::before {
        background: radial-gradient(
            circle 600px at var(--mouse-x) var(--mouse-y),
            rgba(209, 194, 224, 0.3),
            transparent 40%
        );
        z-index: 10;
    }
    .card::after {
        pointer-events: none;
        background:
            radial-gradient(
                circle 800px at var(--mouse-x) var(--mouse-y),
                rgba(209, 194, 224, 0.3),
                transparent 40%
            ),
            var(--grain) rgba(255, 255, 255, 0.1);
        z-index: 30;
    }
</style>

<script lang="ts">
    import { GITHUB_REPO } from "$lib/constants";
    import "../app.css";
    import Button from "./button.svelte";
    import Features from "./features.svelte";
    import Flow from "./flow.svelte";
    import Install from "./install.svelte";
    import Link from "./link.svelte";

    const flows = [
        {
            heading: "Plan with purpose",
            subheading: "Plan",
            description:
                "Define dynamic templates and create periodic notes that adapt to your workflow. From daily tasks to yearly goals, build your second brain with structure and purpose.",
            steps: [
                {
                    icon: "pencilRuler" as const,
                    keyword: "Define",
                    title: "templates with dynamic dates and content.",
                },
                {
                    icon: "filePlus2" as const,
                    keyword: "Create",
                    title: "notes for any period with a single click.",
                },
            ],
        },
        {
            heading: "Review with clarity",
            subheading: "Review",
            description:
                "Navigate your knowledge base with ease. Find, edit, and organize your periodic notes through an intuitive calendar interface.",
            steps: [
                {
                    icon: "calendar" as const,
                    keyword: "Explore",
                    title: "past entries and track completed tasks.",
                },
                {
                    icon: "folderCog" as const,
                    keyword: "Bulk edit",
                    title: "and manage note formats effortlessly.",
                },
            ],
        },
    ];
</script>

<!-- hero -->
<div>
    <div class="min-h-[60vh] flex items-center overflow-hidden purple-fade">
        <div class="container pt-36 pb-24">
            <div class="max-w-lg">
                <p class="mb-2 text-accent flex items-center text-3xl">
                    Periodic Notes Calendar
                </p>
                <h1
                    class="text-4xl leading-tight tracking-tight font-semibold sm:text-6xl sm:leading-tight mb-6 mt-4"
                >
                    Your calendar for deep work.
                </h1>
                <div class="mt-4">
                    <p class="mt-6 text-2xl sm:text-2xl text-muted">
                        Plan, review, and reflect with a beautiful calendar
                        interface for Obsidian. All your periodic notes,
                        perfectly organized.
                    </p>
                </div>
                <div
                    class="py-6 mt-4 flex items-start sm:items-center gap-6 flex-col sm:flex-row"
                >
                    <Button
                        href="#install"
                        className="text-xl hover:text-white"
                        variant="primary">Install plugin</Button
                    >
                    <Link
                        className="text-xl"
                        href={GITHUB_REPO}
                        target="_blank"
                        aria-label="github-icon"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col space-y-16 sm:space-y-32">
    {#each flows as { heading, subheading, description, steps }, i}
        <Flow {heading} {subheading} {description} {steps} pos={i + 1} />
    {/each}
</div>
<Features />
<Install />

<footer class="mt-12 mb-2 text-center text-gray-500">
    <p class="flex justify-center items-center gap-2">
        <span>Made with 💖 for the Obsidian community</span>
        <span class="w-px h-4 bg-gray-400"></span>
        <Link
            className="text-blue-500 hover:underline font-normal"
            href={GITHUB_REPO}
            target="_blank"
        >
            Check out on GitHub
        </Link>
    </p>
</footer>

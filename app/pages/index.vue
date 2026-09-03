<script setup lang="ts">
const proofMetrics = [
  { value: '0.00%', label: 'Written code (100% LLM prompts & prayers)' },
  { value: '€18.50', label: 'Per Oat Flat White at Vienna Tech Hub' },
  { value: '14 Weeks', label: 'Average wait for WKO Gewerbeschein' },
  { value: 'DIN EN 10204', label: 'Stainless Steel API Certification' }
]

const features = [
  {
    icon: '🧠',
    title: '100% Prompt Engineered',
    desc: 'Our entire backend was dictated by voice note into an LLM while riding an e-scooter down Neubaugasse. Zero tests, 100% confidence.'
  },
  {
    icon: '📠',
    title: 'Legacy Fax-to-Spoon API',
    desc: 'Tailored specifically for German automotive suppliers and Austrian authorities. Send us a signed Telefax to stir your soup asynchronously within 3 to 5 business days.'
  },
  {
    icon: '📑',
    title: 'DSGVO & WKO Certified',
    desc: 'Every spoon dip is logged according to §14 UGB. We store zero soup cookies without explicit written consent notarised in Graz.'
  }
]

const toast = useToast()

function handleForbesClick() {
  toast.add({
    title: 'Forbes "30 Under 30" (Gastronomy Tech)',
    description: 'Pitch deck rejected: Judges determined digital spoons cannot physically alter Austrian soup.',
    icon: 'i-lucide-newspaper',
    color: 'warning'
  })
}

function handlePraktikant() {
  toast.add({
    title: 'Praktikant Onboarding Initiated',
    description: 'Your mandatory 6-month unpaid WKO internship application has been routed via Vienna postal mail.',
    icon: 'i-lucide-check-circle',
    color: 'neutral'
  })
}

function handleFounder() {
  toast.add({
    title: 'aws Grant Co-Financing Locked',
    description: 'Federal tax credits deducted. €420 redirected to 1070 Neubau oat flat white accounts.',
    icon: 'i-lucide-sparkles',
    color: 'warning'
  })
}

function handleEnterprise() {
  toast.add({
    title: 'Telefax Transmission Queued',
    description: 'DIN-compliant purchase order printed. Dedicated Munich notary SLA: 3 to 5 business days.',
    icon: 'i-lucide-printer',
    color: 'info'
  })
}
</script>

<template>
  <div class="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
    <!-- Hero Section -->
    <section class="relative pt-16 pb-20 px-6 overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-100/60 via-transparent to-transparent dark:from-amber-950/40 dark:via-neutral-950 dark:to-neutral-950" />

      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-sm font-mono mb-6">
          <span class="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Disproving Austrian Proverbs via API v4.0.2
        </div>

        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-neutral-950 dark:text-white mb-6">
          "Too many spoons in the soup change the flavour."
          <span class="block bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 dark:from-amber-400 dark:via-orange-400 dark:to-rose-400 bg-clip-text text-transparent mt-2">
            Now monetised as an API.
          </span>
        </h1>

        <p class="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Why learn software engineering when you can vibe-code a cloud-native cutlery mesh? We empower non-technical LinkedIn thought leaders to disrupt liquid gastronomy without writing a single line of logic.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            color="warning"
            label="Deploy First Spoon (Free Tier)"
            icon="i-lucide-sparkles"
            to="#demo"
            class="w-full sm:w-auto font-bold text-neutral-950 px-8 shadow-md shadow-amber-500/20"
          />
          <UButton
            size="xl"
            color="neutral"
            variant="subtle"
            label="Read Forbes '30 Under 30' Submission"
            icon="i-lucide-newspaper"
            class="w-full sm:w-auto text-neutral-800 dark:text-neutral-200"
            @click="handleForbesClick"
          />
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800 text-left">
          <div
            v-for="m in proofMetrics"
            :key="m.label"
            class="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 shadow-xs"
          >
            <div class="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">
              {{ m.value }}
            </div>
            <div class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 leading-snug">
              {{ m.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Soup Engine Section -->
    <section
      id="demo"
      class="py-20 px-6 bg-neutral-50/70 dark:bg-neutral-900/40 border-y border-neutral-200 dark:border-neutral-800"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
            Live Demo: The Liquid Vector Modifier
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 text-base mt-2">
            Slide spoons into the virtual pot. Watch our AI calculate flavour degradation in real time while exhausting your EU cloud grants.
          </p>
        </div>

        <SoupEngine />
      </div>
    </section>

    <!-- Vibe Coding Section -->
    <section
      id="vibe-coding"
      class="py-20 px-6 max-w-6xl mx-auto"
    >
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
          Architecture for People Who Refuse to Learn Git
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-base">
          Why study computer science when you can post daily hustle selfies from Café Korb and delegate runtime errors to prompt streams?
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/50 transition shadow-sm"
        >
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4">
            {{ feature.icon }}
          </div>
          <h3 class="text-lg font-bold mb-2 text-neutral-950 dark:text-neutral-100">
            {{ feature.title }}
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section
      id="pricing"
      class="py-20 px-6 bg-neutral-50/70 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
            Monetisation Ready for EU Grant Cycles
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-base">
            Exhaust your innovation funding before the fiscal year ends.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-sm">
            <div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-200">
                Praktikant Tier
              </h3>
              <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                For bootstrapping students in shared flats (WGs).
              </p>
              <div class="text-3xl font-extrabold my-6 text-neutral-950 dark:text-white">
                €0 <span class="text-sm font-normal text-neutral-500">/ lifetime</span>
              </div>
              <ul class="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-mono">
                <li>✓ 1 Plastic Spoon request per day</li>
                <li>✓ Cold soup support only</li>
                <li>✗ No salt alteration algorithms</li>
                <li>✗ Mandatory unpaid WKO internship</li>
              </ul>
            </div>
            <UButton
              block
              color="neutral"
              variant="outline"
              label="Get Started"
              class="mt-8 border-neutral-300 dark:border-neutral-700"
              @click="handlePraktikant"
            />
          </div>

          <div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-amber-500 relative flex flex-col justify-between shadow-2xl shadow-amber-500/10">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-neutral-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Most Grant Funded
            </div>
            <div>
              <h3 class="text-lg font-bold text-amber-600 dark:text-amber-400">
                Neubau Vibe Founder
              </h3>
              <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Directly subsidised by Austrian taxpayers.
              </p>
              <div class="text-3xl font-extrabold my-6 text-neutral-950 dark:text-white">
                €420 <span class="text-sm font-normal text-neutral-500">/ month</span>
              </div>
              <ul class="space-y-3 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-mono">
                <li>✓ 50 High-concurrency silver spoons</li>
                <li>✓ Grießnockerl turbulence analytics</li>
                <li>✓ Prompt injection defence for broth</li>
                <li>✓ Automated LinkedIn "Thrilled to announce" post generator</li>
              </ul>
            </div>
            <UButton
              block
              color="warning"
              label="Claim aws Grant & Subscribe"
              class="mt-8 font-bold text-neutral-950"
              @click="handleFounder"
            />
          </div>

          <div class="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-sm">
            <div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-neutral-200">
                DACH Enterprise
              </h3>
              <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Requires 18-month procurement committee.
              </p>
              <div class="text-3xl font-extrabold my-6 text-neutral-950 dark:text-white">
                €99.999 <span class="text-sm font-normal text-neutral-500">/ billed upfront</span>
              </div>
              <ul class="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-mono">
                <li>✓ Unlimited DIN-compliant spoons</li>
                <li>✓ Dedicated notary in Munich</li>
                <li>✓ On-premise porcelain deployment</li>
                <li>✓ Fax SLA response time &lt; 72 hours</li>
              </ul>
            </div>
            <UButton
              block
              color="neutral"
              variant="outline"
              label="Request Telefax Form"
              class="mt-8 border-neutral-300 dark:border-neutral-700"
              @click="handleEnterprise"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Impressum Disclaimer -->
    <section
      id="compliance"
      class="py-8 px-6 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs font-mono text-neutral-500"
    >
      <div class="max-w-4xl mx-auto">
        <p class="font-bold uppercase mb-1 text-neutral-700 dark:text-neutral-400">
          Notice regarding § 5 ECG / Impressumpflicht
        </p>
        <p>
          This website is a satirical project. No actual spoons are deployed to cloud clusters, and no broth flavour vectors are modified under Austrian or EU federal law.
        </p>
      </div>
    </section>
  </div>
</template>

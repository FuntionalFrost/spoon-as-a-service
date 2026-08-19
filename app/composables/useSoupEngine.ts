export interface SoupOption {
  value: string
  label: string
}

export const SOUP_OPTIONS: SoupOption[] = [
  { value: 'rindsuppe', label: '🇦🇹 Wiener Alt-Wiener Rindssuppe (Classic Legacy Broth)' },
  { value: 'currywurst', label: '🇩🇪 Berlin Mitte Deconstructed Currywurst Reduction' },
  { value: 'frittaten', label: '🇦🇹 1070 Neubau Artisanal Frittatensuppe (Seed-Funded)' },
  { value: 'kartoffel', label: '🇩🇪 DAX-Listed Mittelstand Kartoffelsuppe (On-Premise)' }
]

export function useSoupEngine() {
  const spoonCount = ref(3)
  const soupType = ref('rindsuppe')
  const vibeCodingIntensity = ref(85)
  const isStirring = ref(false)

  const consoleLogs = ref<string[]>([
    '[INIT] Cloud cutlery cluster initialised in eu-central-1 (Frankfurt)',
    '[VIBE] 0 lines of code written. 100% prompt-engineered via vibe streams.',
    '[DACH] WKO Kammerumlage deduction verified. Ready to disrupt broth.'
  ])

  const flavourMetrics = computed(() => {
    const count = spoonCount.value
    const vibe = vibeCodingIntensity.value

    const salt = Math.min(100, Math.round(count * 8.5 + vibe * 0.2))
    const bureaucracy = Math.min(100, Math.round(count > 6 ? 95 : count * 12 + 15))
    const umami = Math.max(5, Math.min(100, Math.round(100 - Math.abs(count - 4) * 14 - (100 - vibe) * 0.3)))
    const runwayBurn = Math.min(100, Math.round(count * 11 + vibe * 0.4))

    return { salt, bureaucracy, umami, runwayBurn }
  })

  const soupStatus = computed(() => {
    if (spoonCount.value === 1) return { text: 'Sub-optimal Concurrency: Soup is stagnant', color: 'text-amber-600 dark:text-amber-400' }
    if (spoonCount.value >= 2 && spoonCount.value <= 5) return { text: 'Synergistic Equilibrium: Flavour Disrupted', color: 'text-emerald-600 dark:text-emerald-400' }
    if (spoonCount.value >= 6 && spoonCount.value <= 9) return { text: 'Overhead Spike: Too many spoons altering liquid vectors', color: 'text-orange-600 dark:text-orange-400' }
    return { text: 'CRITICAL FAILURE: Brei vollständig verdorben (WKO Audit Triggered)', color: 'text-rose-600 dark:text-rose-400' }
  })

  function triggerSpoonSync() {
    isStirring.value = true
    const newLog = `[SPOON-SYNC] Dipped ${spoonCount.value} spoons. Taste vector adjusted by ${(Math.random() * 4).toFixed(2)}x. Umami yield: ${flavourMetrics.value.umami}%`
    consoleLogs.value.unshift(newLog)
    if (consoleLogs.value.length > 5) consoleLogs.value.pop()

    setTimeout(() => {
      isStirring.value = false
    }, 600)
  }

  return {
    spoonCount,
    soupType,
    vibeCodingIntensity,
    isStirring,
    consoleLogs,
    flavourMetrics,
    soupStatus,
    triggerSpoonSync,
    soupOptions: SOUP_OPTIONS
  }
}

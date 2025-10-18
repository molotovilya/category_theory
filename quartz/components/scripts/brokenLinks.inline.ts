document.addEventListener("nav", async () => {
  try {
    const data = await fetchData
    const contentIndex = Array.isArray(data) ? data : Object.values(data)
    const allSlugs = new Set(contentIndex.map((item: any) => item.slug))
    
    const internalLinks = document.querySelectorAll("a.internal[data-slug]")
    
    internalLinks.forEach((link) => {
      const slug = link.getAttribute("data-slug")
      if (!slug) return
      
      if (!allSlugs.has(slug)) {
        link.classList.add("broken")
        link.setAttribute("data-no-popover", "true")
        
        const blockClick = (e: Event) => {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
        
        link.addEventListener("click", blockClick, true)
        window.addCleanup(() => link.removeEventListener("click", blockClick, true))
      }
    })
  } catch (error) {
    console.error("Ошибка в BrokenLinks:", error)
  }
})
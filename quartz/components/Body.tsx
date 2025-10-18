// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
// @ts-ignore
import brokenLinksScript from "./scripts/brokenLinks.inline" // скрипт для определения 404 страниц
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = clipboardScript + "\n" + brokenLinksScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
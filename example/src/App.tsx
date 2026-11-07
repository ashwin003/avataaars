import Avatar, { Piece } from 'avataaars'
import { useRef, useState } from 'react'

import { Config, defaultConfig, groups, isVisible, randomConfig, toJsx } from './options'

/** Splits CamelCase / digit option names into readable labels. */
const humanize = (value: string) =>
  value === '' ? 'Default' : value.replace(/([a-z])([A-Z0-9])/g, '$1 $2')

export default function App() {
  const [config, setConfig] = useState<Config>(defaultConfig)
  const [copied, setCopied] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const set = (key: keyof Config, value: string) =>
    setConfig((c) => ({ ...c, [key]: value }))

  const jsx = toJsx(config)

  const copyJsx = async () => {
    try {
      await navigator.clipboard.writeText(jsx)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be unavailable (e.g. non-secure origin); the code stays selectable.
    }
  }

  const downloadSvg = () => {
    const svg = previewRef.current?.querySelector('svg')
    if (!svg) return
    const clone = svg.cloneNode(true) as SVGSVGElement
    clone.setAttribute('width', '264')
    clone.setAttribute('height', '280')
    const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'avataaar.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className='app'>
      <header>
        <h1>Avataaars configurator</h1>
        <p>Example app for the <code>avataaars</code> React component. Not part of the npm package.</p>
      </header>

      <main>
        <section className='preview'>
          <div className='avatar' ref={previewRef}>
            <Avatar {...config} />
          </div>
          <div className='actions'>
            <button onClick={() => setConfig(randomConfig())}>Randomize</button>
            <button onClick={() => setConfig(defaultConfig)}>Reset</button>
            <button onClick={downloadSvg}>Download SVG</button>
          </div>
          <div className='code'>
            <pre>{jsx}</pre>
            <button onClick={copyJsx}>{copied ? 'Copied' : 'Copy'}</button>
          </div>
        </section>

        <section className='controls'>
          {groups.map((group) => (
            <fieldset key={group.title}>
              <legend>{group.title}</legend>
              {group.options.filter((o) => isVisible(o, config)).map((option) => (
                <label key={option.key}>
                  <span>{option.label}</span>
                  <select value={config[option.key]} onChange={(e) => set(option.key, e.target.value)}>
                    {option.values.map((v) => (
                      <option key={v} value={v}>{humanize(v)}</option>
                    ))}
                  </select>
                </label>
              ))}
            </fieldset>
          ))}
        </section>
      </main>

      <section className='pieces'>
        <h2>Pieces</h2>
        <p>The <code>Piece</code> component renders a single part of the current avatar.</p>
        <div className='piece-grid'>
          {(['top', 'eyes', 'eyebrows', 'mouth', 'facialHair', 'accessories', 'clothe', 'graphics', 'skin'] as const).map((pieceType) => (
            <figure key={pieceType}>
              <Piece {...config} pieceType={pieceType} pieceSize='96' />
              <figcaption>{pieceType}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

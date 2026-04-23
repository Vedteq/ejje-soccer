'use client'

interface PolaroidProps {
  caption?: string
  dark?: boolean
  tilt?: 'tilt-l' | 'tilt-r'
  label?: string
  src?: string
  alt?: string
  style?: React.CSSProperties
  photoStyle?: React.CSSProperties
}

export function Polaroid({ caption, dark, tilt, label, src, alt, style, photoStyle }: PolaroidProps) {
  return (
    <div className={`polaroid ${tilt || ''}`} style={style}>
      <div className={`photo ${dark ? 'dark' : ''}`} style={src ? { ...photoStyle, background: 'none', padding: 0 } : photoStyle}>
        {src
          ? <img src={src} alt={alt || caption || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : label && (
            <span style={{
              position: 'absolute', top: 10, left: 10,
              fontSize: 10, color: 'rgba(0,0,0,0.4)',
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            }}>
              {label}
            </span>
          )
        }
      </div>
      {caption && <div className="caption">{caption}</div>}
    </div>
  )
}

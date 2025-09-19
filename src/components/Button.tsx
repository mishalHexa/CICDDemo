"use client"

type ButtonProps = {
  label: string
  onClick?: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        background: "#0070f3",
        color: "#fff",
        borderRadius: "6px"
      }}
    >
      {label}
    </button>
  )
}

"use client";

export default function SwitchField({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="font-medium">{label}</span>
    </label>
  );
}

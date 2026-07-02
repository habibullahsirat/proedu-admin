export default function FormSection({ title, children }) {
  return (
    <div className="space-y-5">
      <h3 className="border-b pb-2 text-lg font-semibold">{title}</h3>

      {children}
    </div>
  );
}

export default function Error({ message = "Something went wrong" }) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-red-700">
      {message}
    </div>
  );
}

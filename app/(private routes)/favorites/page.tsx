import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function FavoritesPage() {
  return (
    <ProtectedRoute>
      <div>Favorites page</div>
    </ProtectedRoute>
  );
}

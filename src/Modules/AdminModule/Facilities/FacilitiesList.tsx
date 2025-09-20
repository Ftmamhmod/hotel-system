import DeleteConfirmation from "../../Shared/DeleteConfirmation/DeleteConfirmation";

export default function FacilitiesList() {
  return (
    <div>
      <DeleteConfirmation
        open={true}
        onClose={() => false}
        onConfirm={() => {}}
      />
      FacilitiesList
    </div>
  );
}

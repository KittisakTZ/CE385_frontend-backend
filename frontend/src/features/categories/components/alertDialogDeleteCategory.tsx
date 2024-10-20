import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { deleteCategory } from "@/services/category.service";

type DialogCategoryProps ={ 
    getCategoriesData: Function;
    id: string;
    category_name: string;
}
const AlertDialogDelete = ({getCategoriesData, id, category_name}: DialogCategoryProps) => {

    const handleDeleteCategory = async () => {
        try {
            const resDeleteCategory = await deleteCategory({ 
                id: id
            });
            getCategoriesData();
        } catch (error) {
            console.error("Error Delete category:", error);
        }
    };
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color="red" size="1" variant="soft">Delete</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="500px">
                <AlertDialog.Title>Delete Category</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    <strong>Category Name : </strong>{category_name}
                </AlertDialog.Description>

                <Flex gap="3" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button color="red" onClick={handleDeleteCategory}>Delete</Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>

    );
};

export default AlertDialogDelete;
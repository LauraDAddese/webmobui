import { useLocalStorage} from "../composable/localStorage";
import { ref } from "vue";

export const {value: favoris} = useLocalStorage('favoris', []);
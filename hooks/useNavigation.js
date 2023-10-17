import { useRouter } from "expo-router";

function useNavigation() {
    const router = useRouter();

    const go_back = () => router.back();
    const go_to_sign_in = () => router.push('/sign-in');
    const go_to_sign_up = () => router.push('/sign-up');
    const go_to_feed = () => router.push('/feed');
    const go_to_dictionary_of = (id) => router.push({ pathname: '/explore/dictionary', params: { id: id } });
    const go_to_dictionary_detail_of = (id) => router.push({ pathname: '/explore/dictionary/detail', params: { id: id } })

    return {
        go_back,
        go_to_sign_in,
        go_to_feed,
        go_to_sign_up,
        go_to_dictionary_of,
        go_to_dictionary_detail_of,
    };
}

export default useNavigation;
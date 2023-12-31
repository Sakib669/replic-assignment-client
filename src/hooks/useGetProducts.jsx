import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useGetProducts = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isStudent, isLoading: isStudentLoading, refetch} = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/student/${user?.email}`);
            return res.data;
        }
    })
    return [isStudent, isStudentLoading ,refetch];
}
export default useGetProducts;
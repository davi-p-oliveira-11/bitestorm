import { useAuth0, User } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest): Promise<void> => {
    const acessToken = await getAccessTokenSilently();  
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${acessToken}`,    
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isPending: isLoading,
    isError,
    isSuccess,
  } = useMutation<void, Error, CreateUserRequest>({
    mutationFn: createMyUserRequest,
  });

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateMyUserRequest = {
  name?: string;
  addressLine1?: string;
  city?: string;
  country?: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (
    formData: UpdateMyUserRequest
  ): Promise<User> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    return response.json();
  };

  const {
    mutateAsync: updateUser,
    isPending,
    isSuccess,
    error,
    reset,
  } = useMutation<User, Error, UpdateMyUserRequest>({
    mutationFn: updateMyUserRequest,
  });

  if (isSuccess) {
    toast.success("User profile updated!");
  }

  if (error) {
    toast.error(error.message);
    reset();
  }

  return { updateUser, isLoading: isPending };
};




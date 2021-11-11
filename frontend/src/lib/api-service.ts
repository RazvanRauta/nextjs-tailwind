type APIResponse<T> = T;

const headers = { 'Content-Type': 'application/json' };

class ApiService<T> {
  constructor(entitySlug: string) {
    this.entitySlug = entitySlug;
  }

  private entitySlug: string;

  getOne = async (id: string): Promise<APIResponse<T>> => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_API_URL + this.entitySlug + '/' + id
    );
    const response = await request.json();

    if (response.errors) {
      throw new Error(response.errors);
    }

    return response;
  };

  getList = async (): Promise<APIResponse<T[]>> => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_API_URL + this.entitySlug
    );
    const response = await request.json();

    if (response.errors) {
      throw new Error(response.errors);
    }

    return response;
  };

  create = async (
    body: Omit<T, 'id' | 'created' | 'updated'>
  ): Promise<APIResponse<T>> => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_API_URL + this.entitySlug,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
      }
    );

    const response = await request.json();

    if (response.errors) {
      throw new Error(response.errors);
    }

    return response;
  };

  update = async (
    body: Omit<Partial<T>, 'id' | 'created' | 'updated'>,
    id: number
  ): Promise<APIResponse<T>> => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_API_URL + this.entitySlug + '/' + id,
      {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers,
      }
    );
    const response = await request.json();

    if (response.errors) {
      throw new Error(response.errors);
    }

    return response;
  };

  delete = async (id: string): Promise<void> => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_API_URL + this.entitySlug + '/' + id,
      {
        method: 'DELETE',
      }
    );
    const response = await request.json();

    if (response.errors) {
      throw new Error(response.errors);
    }

    return response;
  };
}

export default ApiService;

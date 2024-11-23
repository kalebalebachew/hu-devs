import { useState, useCallback } from 'react';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const getAuthToken = () => {
    return localStorage.getItem('auth_token'); 
  };

  const fetchProjects = useCallback(async () => {
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/admin/projects`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
      });
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, [API_BASE_URL]);


  const approveProject = async (projectId, status) => {
    try {
      const token = getAuthToken();
      const response = await fetch(`${API_BASE_URL}/admin/approve-project/${projectId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({ status }), 
      });
      if (!response.ok) throw new Error('Failed to approve/reject project');
      const updatedProject = await response.json();
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === projectId ? updatedProject : project
        )
      );
    } catch (error) {
      console.error('Error approving/rejecting project:', error);
    }
  };

  return { projects, fetchProjects, approveProject };
}

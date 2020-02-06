import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function DemandSuppliesList({ navigation }) {
  const [demandSuppliesList, setDemandSuppliesList] = useState([]);
  const { demand_id } = navigation.state.params;

  useEffect(() => {
    async function getDemandSuppliesList() {
      const response = await api.get(`demand/${demand_id}/supplies`);
      setDemandSuppliesList(response.data.supplies_id);
    }

    getDemandSuppliesList();
  }, []);

  return <Container />;
}

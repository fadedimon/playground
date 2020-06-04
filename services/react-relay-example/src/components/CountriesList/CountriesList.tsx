import React, { FunctionComponent } from 'react';
import { graphql } from 'react-relay';
import { useQuery } from '../../relay/useQuery';
import { Country } from '../Country';
import { CountriesListQueryResponse, CountriesListQueryVariables } from './__generated__/CountriesListQuery.graphql';

const CountriesListQuery = graphql`
    query CountriesListQuery {
        countries {
            ...Country_item
        }
    }
`;

export const CountriesList: FunctionComponent = () => {
    const { data, error } = useQuery<CountriesListQueryResponse, CountriesListQueryVariables>(CountriesListQuery, {});

    if (error) {
        return <div>Error...</div>;
    }

    if (!data || !data.countries) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.countries.map((country, i) => (
                <Country country={country} key={i} />
            ))}
        </div>
    );
};

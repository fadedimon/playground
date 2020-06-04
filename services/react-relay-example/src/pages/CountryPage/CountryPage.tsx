import React, { FunctionComponent } from 'react';
import { graphql } from 'react-relay';
import { CountriesList } from '../../components/CountriesList';
import { Country } from '../../components/Country';
import { useQuery } from '../../relay';
import { CountryPageQueryResponse, CountryPageQueryVariables } from './__generated__/CountryPageQuery.graphql';
import { Link } from 'react-router-dom';

type Props = {
    match: {
        params: {
            id: string;
        };
    };
};

const CountryPageQuery = graphql`
    query CountryPageQuery($id: ID!) {
        country(code: $id) {
            ...Country_item
            ...CountryCurrencyInfo
        }
    }
`;

export const CountryPage: FunctionComponent<Props> = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;
    const { data, error } = useQuery<CountryPageQueryResponse, CountryPageQueryVariables>(CountryPageQuery, {
        id: id.toUpperCase(),
    });

    if (error) {
        return <div>Error...</div>;
    }

    if (!data || !data.country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Country country={data.country} />
            <hr />
            <Link to="/countries">
                <button>🏡 Go home</button>
            </Link>
            <hr />
            <CountriesList />
        </div>
    );
};

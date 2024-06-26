import React from 'react';
import {
    Button,
    EmptyState,
    EmptyStateBody,
    EmptyStateIcon,
    EmptyStateVariant,
    EmptyStateActions, EmptyStateHeader, EmptyStateFooter
} from '@patternfly/react-core';
import { CheckCircleIcon } from '@patternfly/react-icons';
import { GETTING_STARTED_DOC } from '../../constants';

export default function NoEntitiesFound() {
    return (
        <EmptyState variant={EmptyStateVariant.lg}>
            <EmptyStateHeader titleText="No suggested instance types found"
                icon={<EmptyStateIcon icon={CheckCircleIcon} color='green'/>} headingLevel="h5" />
            <EmptyStateBody>
                {/* eslint-disable-next-line max-len */}
                All the systems that are sending data are optimized. Visit getting started documentation to add more systems to Resource Optimization to see more suggestions.
            </EmptyStateBody><EmptyStateFooter>
                <EmptyStateActions>
                    <Button component='a' variant='primary' href={GETTING_STARTED_DOC} target='_blank'>Getting started documentation</Button>
                </EmptyStateActions>
            </EmptyStateFooter></EmptyState>
    );
}

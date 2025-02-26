import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    EventDetail:undefined;
    Home: undefined;
    Login: undefined;
    TicketSelection:undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

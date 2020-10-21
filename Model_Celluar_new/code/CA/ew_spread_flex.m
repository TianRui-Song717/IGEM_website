function map_now_new = ew_spread_flex(map_now_alt,map_attract_alt,alpha)
map_now_new = map_now_alt;
%%%%%%%%%%%%%%%%%%%%
% alpha = exp(1)/3000
% Calculate the percentage of earthworm removal of each cell
sum_ew = sum(sum(map_now_alt));
P = zeros(102);% Percentage of earthworm removal
for i = 1:102
    for j = 1:102 
        P(i,j) = alpha*map_attract_alt(i,j)/(1/((map_now_alt(i,j)/sum_ew)+1));
    end
end

%%%%%%%%%%%%%%%%%%%%
for i = 2:101
    for j = 2:101
        ew_in_f = floor(P(i,j)*map_now_alt(i-1,j-1)) + floor(P(i,j)*map_now_alt(i-1,j)) + floor(P(i,j)*map_now_alt(i-1,j+1)) +...
            + floor(P(i,j)*map_now_alt(i,j-1)) + floor(P(i,j)*map_now_alt(i,j+1)) + floor(P(i,j)*map_now_alt(i+1,j-1)) +...
            + floor(P(i,j)*map_now_alt(i+1,j)) + floor(P(i,j)*map_now_alt(i+1,j+1));
        ew_out_f = floor(map_now_alt(i,j)*P(i-1,j-1)) + floor(map_now_alt(i,j)*P(i-1,j)) + floor(map_now_alt(i,j)*P(i-1,j+1)) +...
            + floor(map_now_alt(i,j)*P(i,j-1)) + floor(map_now_alt(i,j)*P(i,j+1)) + floor(map_now_alt(i,j)*P(i+1,j-1)) +...
            + floor(map_now_alt(i,j)*P(i+1,j)) + floor(map_now_alt(i,j)*P(i+1,j+1));
        map_now_new(i,j) = map_now_alt(i,j) - ew_out_f + ew_in_f;  

        ew_in = P(i,j)*(map_now_alt(i-1,j-1) + map_now_alt(i-1,j) + map_now_alt(i-1,j+1) + map_now_alt(i,j-1) +...
            + map_now_alt(i,j+1) + map_now_alt(i+1,j-1) + map_now_alt(i+1,j) + map_now_alt(i+1,j+1));
        ew_out = map_now_alt(i,j)*(P(i-1,j-1) + P(i-1,j) + P(i-1,j+1) + P(i,j-1) + P(i,j+1) + P(i+1,j-1) + P(i+1,j) + P(i+1,j+1));
        
        ew_rest = floor(ew_out - ew_in) - (ew_out_f - ew_in_f);

        position = round(8*rand(1,ew_rest));
        for k = 1:ew_rest
            if map_now_new(i,j)>1
               switch  position(1,k)
                   case 0
                       map_now_new(i,j) = map_now_new(i,j);
                   case 1
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i-1,j-1) = map_now_new(i-1,j-1) + 1;
                   case 2
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i-1,j) = map_now_new(i-1,j) + 1;
                   case 3
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i-1,j+1) = map_now_new(i-1,j+1) + 1;
                   case 4
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i,j-1) = map_now_new(i,j-1) + 1;
                   case 5
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i,j+1) = map_now_new(i,j+1) + 1;
                   case 6
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i+1,j-1) = map_now_new(i+1,j-1) + 1;
                   case 7
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i+1,j) = map_now_new(i+1,j) + 1;
                   case 8
                       map_now_new(i,j) = map_now_new(i,j) - 1;
                       map_now_new(i+1,j+1) = map_now_new(i+1,j+1) + 1;
               end
            end
        end
                        
    end
end

map_now_new(1,1) = map_now_new(101,101);
map_now_new(1,102) = map_now_new(101,2);
map_now_new(102,1) = map_now_new(2,101);
map_now_new(102,102) = map_now_new(2,2);

for i = 2:101
    map_now_new(1,i) = map_now_new(101,i);
    map_now_new(102,i) = map_now_new(2,i);
    map_now_new(i,1) = map_now_new(i,101);
    map_now_new(i,102) = map_now_new(i,2);
end
